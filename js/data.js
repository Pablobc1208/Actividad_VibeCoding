/**
 * F1 Hub - Static Data
 * Using global constant for file:// protocol compatibility (no ES6 modules needed)
 */

const F1Data = {
    drivers: [
        { pos: 1, name: 'M. Verstappen', team: 'Red Bull Racing', pts: 136, color: '#3671C6' },
        { pos: 2, name: 'L. Norris', team: 'McLaren', pts: 129, color: '#F58020' },
        { pos: 3, name: 'C. Leclerc', team: 'Ferrari', pts: 118, color: '#F91536' },
        { pos: 4, name: 'G. Russell', team: 'Mercedes', pts: 95, color: '#00D2BE' },
        { pos: 5, name: 'C. Sainz', team: 'Williams', pts: 68, color: '#00A0DE' },
        { pos: 6, name: 'L. Hamilton', team: 'Ferrari', pts: 62, color: '#F91536' },
        { pos: 7, name: 'F. Alonso', team: 'Aston Martin', pts: 45, color: '#229971' },
        { pos: 8, name: 'O. Piastri', team: 'McLaren', pts: 40, color: '#F58020' },
        { pos: 9, name: 'L. Lawson', team: 'Red Bull Racing', pts: 28, color: '#3671C6' },
        { pos: 10, name: 'K. Antonelli', team: 'Mercedes', pts: 15, color: '#00D2BE' },
        { pos: 11, name: 'A. Albon', team: 'Williams', pts: 12, color: '#00A0DE' },
        { pos: 12, name: 'P. Gasly', team: 'Alpine', pts: 10, color: '#0093cc' },
        { pos: 13, name: 'E. Ocon', team: 'Haas', pts: 8, color: '#B6BABD' },
        { pos: 14, name: 'Y. Tsunoda', team: 'RB', pts: 6, color: '#6692FF' },
        { pos: 15, name: 'N. Hulkenberg', team: 'Sauber', pts: 4, color: '#52e252' },
        { pos: 16, name: 'L. Stroll', team: 'Aston Martin', pts: 2, color: '#229971' },
        { pos: 17, name: 'O. Bearman', team: 'Haas', pts: 1, color: '#B6BABD' },
        { pos: 18, name: 'J. Doohan', team: 'Alpine', pts: 0, color: '#0093cc' },
        { pos: 19, name: 'G. Bortoleto', team: 'Sauber', pts: 0, color: '#52e252' },
        { pos: 20, name: 'I. Hadjar', team: 'RB', pts: 0, color: '#6692FF' }
    ],

    constructors: [
        { pos: 1, team: 'Red Bull Racing', pts: 164, color: '#3671C6' },
        { pos: 2, team: 'Ferrari', pts: 180, color: '#F91536' },
        { pos: 3, team: 'McLaren', pts: 169, color: '#F58020' },
        { pos: 4, team: 'Mercedes', pts: 110, color: '#00D2BE' },
        { pos: 5, team: 'Williams', pts: 80, color: '#00A0DE' },
        { pos: 6, team: 'Aston Martin', pts: 47, color: '#229971' },
        { pos: 7, team: 'Alpine', pts: 10, color: '#0093cc' },
        { pos: 8, team: 'Haas F1 Team', pts: 9, color: '#B6BABD' },
        { pos: 9, team: 'Visa Cash App RB', pts: 6, color: '#6692FF' },
        { pos: 10, team: 'Sauber', pts: 4, color: '#52e252' }
    ],

    calendar: [
        { day: '16', month: 'MAR', name: 'GP de Australia', circuit: 'Albert Park Circuit', status: 'completed' },
        { day: '23', month: 'MAR', name: 'GP de China', circuit: 'Shanghai International Circuit', status: 'completed' },
        { day: '06', month: 'ABR', name: 'GP de Japón', circuit: 'Suzuka International Racing Course', status: 'next' },
        { day: '13', month: 'ABR', name: 'GP de Baréin', circuit: 'Bahrain International Circuit', status: 'upcoming' },
        { day: '20', month: 'ABR', name: 'GP de Arabia Saudí', circuit: 'Jeddah Corniche Circuit', status: 'upcoming' },
        { day: '04', month: 'MAY', name: 'GP de Miami', circuit: 'Miami International Autodrome', status: 'upcoming' },
        { day: '18', month: 'MAY', name: 'GP de Emilia-Romaña', circuit: 'Imola Circuit', status: 'upcoming' },
        { day: '25', month: 'MAY', name: 'GP de Mónaco', circuit: 'Circuit de Monaco', status: 'upcoming' },
        { day: '01', month: 'JUN', name: 'GP de España', circuit: 'Circuit de Barcelona-Catalunya', status: 'special' },
        { day: '15', month: 'JUN', name: 'GP de Canadá', circuit: 'Circuit Gilles-Villeneuve', status: 'upcoming' },
        { day: '29', month: 'JUN', name: 'GP de Austria', circuit: 'Red Bull Ring', status: 'upcoming' },
        { day: '06', month: 'JUL', name: 'GP de Gran Bretaña', circuit: 'Silverstone Circuit', status: 'upcoming' },
        { day: '27', month: 'JUL', name: 'GP de Bélgica', circuit: 'Circuit de Spa-Francorchamps', status: 'upcoming' },
        { day: '03', month: 'AGO', name: 'GP de Hungría', circuit: 'Hungaroring', status: 'upcoming' },
        { day: '31', month: 'AGO', name: 'GP de Países Bajos', circuit: 'Circuit Zandvoort', status: 'upcoming' },
        { day: '07', month: 'SEP', name: 'GP de Italia', circuit: 'Monza Circuit', status: 'upcoming' },
        { day: '21', month: 'SEP', name: 'GP de Azerbaiyán', circuit: 'Baku City Circuit', status: 'upcoming' },
        { day: '05', month: 'OCT', name: 'GP de Singapur', circuit: 'Marina Bay Street Circuit', status: 'upcoming' },
        { day: '19', month: 'OCT', name: 'GP de Estados Unidos', circuit: 'Circuit of the Americas', status: 'upcoming' },
        { day: '26', month: 'OCT', name: 'GP de México', circuit: 'Autódromo Hermanos Rodríguez', status: 'upcoming' },
        { day: '09', month: 'NOV', name: 'GP de São Paulo', circuit: 'Interlagos Circuit', status: 'upcoming' },
        { day: '22', month: 'NOV', name: 'GP de Las Vegas', circuit: 'Las Vegas Strip Circuit', status: 'upcoming' },
        { day: '30', month: 'NOV', name: 'GP de Catar', circuit: 'Lusail International Circuit', status: 'upcoming' },
        { day: '07', month: 'DIC', name: 'GP de Abu Dabi', circuit: 'Yas Marina Circuit', status: 'upcoming' }
    ]
};
