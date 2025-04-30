import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { DataGrid } from '@mui/x-data-grid';  // ✅ 新版 DataGrid

// IconButton + 多個 Button 元件
const MultiButton = ({ num }) => {
  const changeText = () => {
    alert("按下按鈕！");
  };

  const output = [];

  // 三個 IconButton
  output.push(
    <IconButton key="cart" color="primary" aria-label="add to shopping cart">
      <AddShoppingCartIcon />
    </IconButton>
  );
  output.push(
    <IconButton key="delete" color="primary" aria-label="delete">
      <DeleteIcon />
    </IconButton>
  );
  output.push(
    <IconButton key="alarm" color="primary" aria-label="add an alarm">
      <AlarmIcon />
    </IconButton>
  );

  // 多個普通 Button
  for (let i = 1; i <= num; ++i) {
    output.push(
      <Button key={i} variant="contained" color="primary" onClick={changeText} style={{ margin: 4 }}>
        第{i}個按鍵
      </Button>
    );
  }

  return <div style={{ marginBottom: 20 }}>{output}</div>;
};

// 表格欄位與資料
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

// DataGrid 顯示元件
const MyDataGrid = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

function App() {
  return (
    <div className="App" style={{ padding: 20 }}>
      <h2>這是你的按鈕列表：</h2>
      <MultiButton num={5} />
      <h2>資料表格：</h2>
      <MyDataGrid />
    </div>
  );
}

export default App;





// import './App.css';

// const changeText = (event)=>{
//   console.log(event.target);
//   event.target.innerText = event.target.innerText+ " 被點了";
// }

// function App() {
//   const styleArgument = {fontSize: '100px', color: 'red'};
//   return (
//     <div className="App">
//       <h1 style = {styleArgument} onClick = {changeText}>hello CGU!!
//       </h1>
//     </div>
//   );
// }

// export default App;
