// API's configuration

d3.json(
  'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json'
)
  .then(data => {
  
    console.log(data);
  })
  .catch(error => {
   
    console.error('Error al cargar los datos:', error);
  });

