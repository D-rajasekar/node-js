async function addUsers() {
  const userData = [
    { name: "RDX", avatar: "hi bois" },
    { name: "bhavani", avatar: "hi girls" },
    { name: "Neha", avatar: "hi bois and girls" },
  ];

  await Promise.all(
    userData.map(async (user) => {
      const res = await fetch(
        `https://65bb5cf452189914b5bbda98.mockapi.io/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
    })
  );
}

addUsers();


//put functions

//Code to update user data in the API

const updateData = {
    avatar:
      "https://www.istockphoto.com/vector/flag-of-india-gm519611160-90622047",
  };
  
  fetch("https://65bb5cf652189914b5bbdac7.mockapi.io/users")
    .then((res) => res.json())
    .then((data) =>
      data.forEach((obj) =>
        fetch(`https://65bb5cf652189914b5bbdac7.mockapi.io/users/${obj.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateData),
        })
      )
    );

