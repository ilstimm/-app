import React from 'react';

const url = 'http://localhost:8080/Informations';

// export default function InformationMethod(props){
//     if({ props.method } == "POST"){

//     }
// }

export function Post(props) {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({
      user: props.user,
      title: props.title,
      name: props.name,
      sex: props.sex,
      age: props.age,
      type: props.type,
      region: props.region,
      phoneNumber: props.phone,
      email: props.email,
      introduction: props.introduction,
      education: props.education,
      createTime: props.createTime,
      refreshTime: props.refreshTime,
      order: props.order,
    }),
  };
  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
}

export function Delete(user, order) {
  console.log('user = ' + user, 'order = ' + order);
  const options = {
    method: 'Delete',
  };
  fetch(url + '/' + user + '/' + order, options);
}
