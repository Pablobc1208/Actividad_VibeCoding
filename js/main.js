/**
 * F1 Hub - Main JavaScript
 * Handles dynamic content rendering and UI interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    initMobileMenu();
    initScrollAnimations();
    initSmoothScroll();
    initDriversToggle();
    initTabs();
});

/**
 * Render all dynamic content from F1Data
 */
function renderContent() {
    if (typeof F1Data === 'undefined') {
        console.error('F1Data not loaded');
        return;
    }

    renderDrivers();
    renderConstructors();
    renderCalendar();
}

/**
 * Render Drivers Standings
 */
function renderDrivers() {
    const driversBody = document.getElementById('drivers-body');
    const fullDriversBody = document.getElementById('full-drivers');

    if (!driversBody || !fullDriversBody) return;

    // Top 10
    driversBody.innerHTML = F1Data.drivers.slice(0, 10).map(driver => createDriverRow(driver)).join('');

    // Bottom 10
    fullDriversBody.innerHTML = F1Data.drivers.slice(10).map(driver => createDriverRow(driver)).join('');
}

function createDriverRow(driver) {
    return `
        <tr class="${driver.pos === 1 ? 'leader' : ''}">
            <td>${driver.pos}</td>
            <td class="driver-info">
                <span class="team-color-bar" style="--team-color: ${driver.color};"></span>
                ${driver.name}
            </td>
            <td class="hide-mobile">${driver.team}</td>
            <td>${driver.pts}</td>
        </tr>
    `;
}

/**
 * Render Constructors Standings
 */
function renderConstructors() {
    const tbody = document.getElementById('constructors-body');
    if (!tbody) return;

    tbody.innerHTML = F1Data.constructors.map(team => `
        <tr class="${team.pos === 1 ? 'leader' : ''}">
            <td>${team.pos}</td>
            <td class="driver-info">
                <span class="team-color-bar" style="--team-color: ${team.color};"></span>
                ${team.team}
            </td>
            <td>${team.pts}</td>
        </tr>
    `).join('');
}

/**
 * Render Calendar
 */
function renderCalendar() {
    const grid = document.getElementById('calendar-grid');
    if (!grid) return;

    grid.innerHTML = F1Data.calendar.map(gp => {
        let cardClass = 'calendar-card';
        let badge = '';

        if (gp.status === 'completed') {
            cardClass += ' completed';
            badge = '<span class="status-badge completed">Finalizado</span>';
        } else if (gp.status === 'next') {
            cardClass += ' active-gp';
            badge = '<span class="status-badge next">Próximo</span>';
        } else if (gp.status === 'special') {
            cardClass += ' special-gp';
        }

        return `
            <div class="${cardClass}">
                <div class="gp-date">
                    <span class="day">${gp.day}</span>
                    <span class="month">${gp.month}</span>
                </div>
                <div class="gp-info">
                    <h4>${gp.name}</h4>
                    <p class="circuit">${gp.circuit}</p>
                    ${badge}
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Toggle Full Drivers Grid (10 -> 20)
 */
function initDriversToggle() {
    const toggleBtn = document.getElementById('toggle-drivers-btn');
    const hiddenRows = document.getElementById('full-drivers');

    if (!toggleBtn || !hiddenRows) return;

    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const isVisible = hiddenRows.classList.contains('visible');

        if (isVisible) {
            hiddenRows.classList.remove('visible');
            toggleBtn.textContent = 'Ver Parrilla Completa (20)';
        } else {
            hiddenRows.classList.add('visible');
            toggleBtn.textContent = 'Ocultar Parrilla';
        }
    });
}

/**
 * Tabs Logic
 */
function initTabs() {
    const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(`${tabId}-content`).classList.add('active');
        });
    });
}

/**
 * Mobile Menu
 */
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.getElementById('main-nav');
    const hamburger = document.querySelector('.hamburger-inner');

    if (!menuBtn || !nav) return;

    menuBtn.addEventListener('click', () => {
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        nav.classList.toggle('active');

        if (!isExpanded) {
            hamburger.style.background = 'transparent';
            hamburger.style.transform = 'rotate(45deg)';
        } else {
            hamburger.style.background = '';
            hamburger.style.transform = '';
        }
    });

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuBtn.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

/**
 * Scroll Animations
 */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.news-card, .section-title, .hero-content')
        .forEach(el => observer.observe(el));
}

/**
 * Smooth Scroll
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - 80;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                const nav = document.getElementById('main-nav');
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    document.querySelector('.mobile-menu-btn').setAttribute('aria-expanded', 'false');
                }
            }
        });
    });
}