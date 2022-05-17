const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    const dateResult = [month, day, year].join('/');
    return dateResult;
  };
  
  export default formatDate;
  