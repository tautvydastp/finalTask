// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import serviceApi from '../../api/serviceApi';

// export default () => {
//   const { id } = useParams();
//   const [service, setService] = useState({});

//   useEffect(() => {
//     serviceApi.fetchServiceById(id)
//       .then(resp => setService(resp.data));
//   }, [id])

//   return (
//    <div>
//      <h1>{service.service}</h1>
//      <p>{service.description}</p>
//      <p>{service.price}</p>
//      {/* {service.fileName &&
//       <img
//         src={`http://localhost:8080/files/${service.fileName}`}
//         alt="photo"
//       />
//       } */}
//    </div>
//   )
// };