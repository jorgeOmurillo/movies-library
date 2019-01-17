// Get visible distributors
export default (distributors, { text, filterBy }) => {
  return distributors
    .filter(distributor => {
      const textMatch = distributor.name
        .toLowerCase()
        .includes(text.toLowerCase());

      return textMatch;
    })
    .filter(dist => {
      switch (filterBy) {
        case 'aten-be':
          return dist.region === 'ATEN-BE';
        case 'aten-cn':
          return dist.region === 'ATEN-CN';
        case 'aten-jp':
          return dist.region === 'ATEN-JP';
        case 'aten-kr':
          return dist.region === 'ATEN-KR';
        case 'aten-nj':
          return dist.region === 'ATEN-NJ';
        case 'aten-tech':
          return dist.region === 'ATEN-TECH';
        case 'aten-uk':
          return dist.region === 'ATEN-UK';
        case 'aten-tw':
          return dist.region === 'ATEN-TW';
        case 'eastern-europe':
          return dist.region === 'Eastern Europe';
        case 'latin-america':
          return dist.region === 'Latin America';
        case 'middle-east-and-north-africa':
          return dist.region === 'Middle East and North Africa';
        case 'new-zealand':
          return dist.region === 'New Zealand';
        case 'poland':
          return dist.region === 'Poland';
        case 'russia':
          return dist.region === 'Russia';
        case 'south-africa':
          return dist.region === 'South Africa';
        case 'south-asia':
          return dist.region === 'South Asia';
        case 'southeast-asia':
          return dist.region === 'Southeast Asia';
        case 'turkey':
          return dist.region === 'Turkey';
        default:
          return dist;
      }
    });
};
