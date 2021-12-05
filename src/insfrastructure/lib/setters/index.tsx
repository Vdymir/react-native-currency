import 'intl';
import 'intl/locale-data/jsonp/en'; // or any other locale you need

export default function setThousands(
  number: number | string,
  type: string = 'USD',
) {
  switch (type) {
    case 'COP':
      return new Intl.NumberFormat('de-DE').format(
        Number(parseFloat(String(number)).toFixed(3)),
      );
    case 'USD':
      return new Intl.NumberFormat('en-IN').format(
        Number(parseFloat(String(number)).toFixed(3)),
      );
  }
}
