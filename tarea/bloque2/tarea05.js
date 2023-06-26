let mes = 'Abril';

switch (mes) {
    case 'Enero' || 'Marzo' || 'Mayo' || 'Julio' || 'Agosoto' || 'Octubre' || 'Diciembre':
        console.log(`El mes ${mes} tiene 31 días`);
        break;
    case 'Febrero':
        console.log(`El mes ${mes} tiene 28/29 días`);
        break;
    case 'Abril' || 'Junio' || 'Setiembre' || 'Noviembre':
        console.log(`El mes  ${mes} tiene 30 días`);
        break;
}