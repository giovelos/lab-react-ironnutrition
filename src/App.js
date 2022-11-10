import './App.css';
import foods from './foods.json';
import { useState } from 'react';

function App() {
  const [allFoods, setAllFoods] = useState(foods);

  return <div className="App">
    {allFoods.map((current)=>{
      return <div>
      <p>{current.name}</p>
      <img src={current.image} alt="imgComida" width={200} />

      </div>; 

    }
    )}
  </div>;
 }
 // EXAMPLE
// To start using the pre-made Ant Design components we must first import them:
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function Example() {
  // After importing the components we can render them directly:
  return (
    <div>
      <Row>
        <Col>
          <Divider>Fancy Input</Divider>
          <Input value={''} onChange={() => {}} />
        </Col>

        <Col>
          <Card title={'Fancy Card'}>
            <Button onClick={() => {}}>Fancy Button</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
 export default App;