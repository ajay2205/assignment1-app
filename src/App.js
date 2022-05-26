import './App.css';

function App(props) {
  const ListItems = props.ListItems;
  const mapItems = ListItems.map((ListItem)=>
  <tr>
  <th>{ListItem}</th>
</tr>
  )
  return (
    <div className="App">
      <div className='table'>
      <h2>Names of Students</h2>
      <table>
      {mapItems}
      </table>
      </div>
    </div>
  );
}

export default App;
