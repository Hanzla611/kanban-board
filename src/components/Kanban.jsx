import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import Board, { moveCard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
// Use your own styles to override the default styles
// import "./styles.css";

const board = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      backgroundColor: "#fff",
      cards: [
        {
          id: 1,
          title: "Card title 1",
          description: "Card content"
        },
        {
          id: 2,
          title: "Card title 2",
          description: "Card content"
        },
        {
          id: 3,
          title: "Card title 3",
          description: "Card content"
        }
      ]
    },
    {
      id: 2,
      title: "Doing",
      cards: [
        {
          id: 9,
          title: "Card title 9",
          description: "Card content"
        }
      ]
    },
    {
      id: 3,
      title: "Q&A",
      cards: [
        {
          id: 10,
          title: "Card title 10",
          description: "Card content"
        },
        {
          id: 11,
          title: "Card title 11",
          description: "Card content"
        }
      ]
    },
    {
      id: 4,
      title: "Production",
      cards: [
        {
          id: 12,
          title: "Card title 12",
          description: "Card content"
        },
        {
          id: 13,
          title: "Card title 13",
          description: "Card content"
        }
      ]
    }
  ]
};

function ControlledBoard() {
  // You need to control the state yourself.
  const [controlledBoard, setBoard] = useState(board);
  const name = useRef();

  function handleCardMove(_card, source, destination) {
    console.log(_card, "carddd");
    console.log(source, "source");
    console.log(destination, "destination");

    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }
  const handleAdd = () => {
    // Extract the "Backlog" column from controlledBoard
    const backlogColumn = controlledBoard.columns.find((column) => column.title === "Backlog");

    if (backlogColumn) {
      // Create a new card object based on the input value
      const newCard = {
        id: Date.now(), // Generate a unique ID (you can use a better method)
        title: name.current.value,
        description: "New card content",
      };

      // Add the new card to the "Backlog" column
      backlogColumn.cards.push(newCard);

      // Update the controlledBoard state with the modified "Backlog" column
      setBoard({
        ...controlledBoard,
        columns: controlledBoard.columns.map((column) =>
          column.title === "Backlog" ? backlogColumn : column
        ),
      });

      // Clear the input field
      name.current.value = "";
    }
  };
  return (
    <>
      <input
        ref={name}
        type="text"
        name="name"
        id="name"
        required=""
      />
      <button onClick={handleAdd}>Add</button>
      <Board onCardDragEnd={handleCardMove} disableColumnDrag>
        {controlledBoard}
      </Board>
    </>
  );
}

export default ControlledBoard