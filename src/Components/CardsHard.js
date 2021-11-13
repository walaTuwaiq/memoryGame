import React, { useState, useEffect } from "react";
import "./CardsHard.css";

export default function CardsHard() {
  const [clickOne, setClickOne] = useState("");
  const [clickOneID, setClickOneID] = useState("");

  const [cardsArray, setCardsArray] = useState([
    {
      id: 1,
      url: "https://img.freepik.com/free-vector/hand-drawn-flat-halloween-zombies-collection_23-2149101275.jpg?size=626&ext=jpg",
      name: "11",
      toggle: false,
    },
    {
      id: 2,
      url: "https://w7.pngwing.com/pngs/950/1007/png-transparent-zombie-animation-animation-game-child-vertebrate.png",
      name: "22",
      toggle: false,
    },
    {
      id: 3,
      url: "https://img.freepik.com/free-vector/hand-drawn-flat-halloween-zombies-collection_23-2149101275.jpg?size=626&ext=jpg",
      name: "11",
      toggle: false,
    },
    {
      id: 4,
      url: "https://w7.pngwing.com/pngs/950/1007/png-transparent-zombie-animation-animation-game-child-vertebrate.png",
      name: "22",
      toggle: false,
    },
    {
      id: 5,
      url: "https://magiwebsa.com/wp-content/uploads/2017/03/zombie-gif.gif",
      name: "33",
      toggle: false,
    },
    {
      id: 6,
      url: "http://2.bp.blogspot.com/-4ccpSqNzhhc/UHtQcGvDj7I/AAAAAAAAMxU/vRZRb9PWKOc/s1600/zombie.gif",
      name: "55",
      toggle: false,
    },
    {
      id: 7,
      url: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Mojo_the_zombie.gif",
      name: "99",
      toggle: false,
    },
    {
      id: 8,
      url: "https://i.gifer.com/sid.gif",
      name: "44",
      toggle: false,
    },
    {
      id: 9,
      url: "https://magiwebsa.com/wp-content/uploads/2017/03/zombie-gif.gif",
      name: "33",
      toggle: false,
    },
    {
      id: 10,
      url: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Mojo_the_zombie.gif",
      name: "99",
      toggle: false,
    },
    {
      id: 11,
      url: "http://2.bp.blogspot.com/-4ccpSqNzhhc/UHtQcGvDj7I/AAAAAAAAMxU/vRZRb9PWKOc/s1600/zombie.gif",
      name: "55",
      toggle: false,
    },
    {
      id: 12,
      url: "https://i.gifer.com/sid.gif",
      name: "44",
      toggle: false,
    },
    {
      id: 13,
      url: "https://media2.giphy.com/media/rNtdDlUfTjpFS/200.gif",
      name: "00",
      toggle: false,
    },
    {
      id: 14,
      url: "https://media2.giphy.com/media/rNtdDlUfTjpFS/200.gif",
      name: "00",
      toggle: false,
    },
    {
      id: 15,
      url: "https://media4.giphy.com/media/3o6Zt9cXegdKYQMxSE/200.gif",
      name: "mm",
      toggle: false,
    },
    {
      id: 16,
      url: "https://i.pinimg.com/originals/e6/18/93/e61893b1a2f3a7a5f4f63f18ce5e25b7.jpg",
      name: "ww",
      toggle: false,
    },
    {
      id: 17,
      url: "https://media4.giphy.com/media/3o6Zt9cXegdKYQMxSE/200.gif",
      name: "mm",
      toggle: false,
    },
    {
      id: 18,
      url: "https://i.pinimg.com/originals/e6/18/93/e61893b1a2f3a7a5f4f63f18ce5e25b7.jpg",
      name: "ww",
      toggle: false,
    },
  ]);
  const [togglePages, setTogglePages] = useState(true);

  const basicImg =
    "https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png";

    useEffect(() => {
      const copArr=[...cardsArray]
      const randomArr=[]
      for(let i=0;i<cardsArray.length;i++){
          let randomIndex= Math.floor(Math.random()*copArr.length)
              randomArr.push(copArr[randomIndex])
              copArr.splice(randomIndex,1)
      }
      setCardsArray(randomArr)
  }, [])

  const replaceImg = (elem, index) => {

    const id = elem.id;
    let newArr = JSON.parse(JSON.stringify(cardsArray));

    if (elem.id === clickOneID) {
      return;
    }

    for (let i = 0; i < cardsArray.length; i++) {
      if (cardsArray[i].id == id) {
        if (cardsArray[i].toggle == true) {
          newArr[i].toggle = false;
        } else {
          newArr[i].toggle = true;
        }
      }
    }
    setCardsArray(newArr);

    if (clickOne == "") {
      setClickOne(elem.name);
      setClickOneID(elem.id);
      return;
    }

    if (clickOne !== elem.name) {
      setCardsArray(newArr);

      setTimeout(() => {
        const newArr = [...cardsArray];
        for (let i = 0; i < newArr.length; i++) {
          if (newArr[i].id === elem.id || newArr[i].id === clickOneID) {
            newArr[i].toggle = false;
            setClickOne("");
          }
        }
        setCardsArray(newArr);
      }, 300);
    } else {
      setClickOne("");
    }
    setCardsArray(newArr);
  };


  const changePageToCardsEasy = () => {
    setTogglePages(false);
  };

  return (
    <div>

      <div>
        {togglePages ? (
          <div className="homePage">
            <h1>Welcome to memory game:</h1>
            <h3>ARE YOU READY?!</h3>
            <button
              className="easy-btn"
              onClick={() => {
                changePageToCardsEasy();
              }}
            >
              HARD!
            </button>
          </div>
        ) 
        :
        (
          <div className="container">
            {cardsArray.map((elem, index) => {
              if (elem.toggle === true) {
                return (
                  <div
                    onClick={() => {
                      replaceImg(elem, index);
                    }}
                    key={index}
                  >
                    <img id="pics" src={elem.url} alt="" />
                  </div>
                );
              } else {
                return (
                  <div
                    onClick={() => {
                      replaceImg(elem, index);
                    }}
                    key={index}
                  >
                    <img id="basicImg" src={basicImg} alt="" />
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>

    </div>
  );
}
