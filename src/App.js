import './App.css';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import Inputs from './components/Inputs';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import Logo from './components/Logo';

function App() {
	const [input, setInput] = useState('');

	const addInput = (value) => {
		setInput(input + value);
	};

	const calculateInput = () => {
		if (input) {
			setInput(evaluate(input));
		} else {
			setInput('');
		}
	};

	return (
		<div className='App'>
			<Logo />
			<div className='calculator-container'>
				<Inputs input={input} />
				<div className='row'>
					<Button handleClic={addInput}>1</Button>
					<Button handleClic={addInput}>2</Button>
					<Button handleClic={addInput}>3</Button>
					<Button handleClic={addInput}>+</Button>
				</div>
				<div className='row'>
					<Button handleClic={addInput}>4</Button>
					<Button handleClic={addInput}>5</Button>
					<Button handleClic={addInput}>6</Button>
					<Button handleClic={addInput}>-</Button>
				</div>
				<div className='row'>
					<Button handleClic={addInput}>7</Button>
					<Button handleClic={addInput}>8</Button>
					<Button handleClic={addInput}>9</Button>
					<Button handleClic={addInput}>*</Button>
				</div>
				<div className='row'>
					<Button handleClic={calculateInput}>=</Button>
					<Button handleClic={addInput}>0</Button>
					<Button handleClic={addInput}>.</Button>
					<Button handleClic={addInput}>/</Button>
				</div>
				<div className='row'>
					<ClearButton handleClic={() => setInput('')}>Clear</ClearButton>
				</div>
			</div>
		</div>
	);
}

export default App;
