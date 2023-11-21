import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem(props) {
	const { id, cover, name, water, light } = props;
  
	const handleClick = (e) => {
	  console.log('✨ Ceci est un clic ✨');
	  console.log('✨ Ceci est mon event :', e)
	  console.log(e.target.closest('li').id);
	}
  
	return (
	  <li id={id} className='lmj-plant-item' onClick={handleClick}>
		<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
		{name}
		<div>
		  <CareScale careType='water' scaleValue={water} />
		  <CareScale careType='light' scaleValue={light} />
		</div>
	  </li>
	);
  }
  
  export default PlantItem;
  