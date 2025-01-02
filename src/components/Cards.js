import { useState, useRef } from 'react';
import Card from './Card';

export default function Cards() {
    const [cards, setCards] = useState([
        { id: 0, name: 'Bryan Cranston', status: '', img: 'src/assets/images/01.jpg' },
        { id: 0, name: 'Bryan Cranston', status: '', img: 'src/assets/images/01.jpg' },
        { id: 1, name: 'Bryan Cranston', status: '', img: '../assets/images/03.png' },
        { id: 1, name: 'Bryan Cranston', status: '', img: 'src/assets/images/02.jpg' },
        { id: 2, name: 'Bryan Cranston', status: '', img: 'src/assets/images/03.png' },
        { id: 2, name: 'Bryan Cranston', status: '', img: 'src/assets/images/03.png' },
        { id: 3, name: 'Bryan Cranston', status: '', img: 'src/assets/images/04.jpg' },
        { id: 3, name: 'Bryan Cranston', status: '', img: 'src/assets/images/04.jpg' },
        { id: 4, name: 'Bryan Cranston', status: '', img: 'src/assets/images/05.jpg' },
        { id: 4, name: 'Bryan Cranston', status: '', img: 'src/assets/images/05.jpg' },
        { id: 5, name: 'Bryan Cranston', status: '', img: 'src/assets/images/06.jpg' },
        { id: 5, name: 'Bryan Cranston', status: '', img: 'src/assets/images/06.jpg' },
        { id: 6, name: 'Bryan Cranston', status: '', img: 'src/assets/images/07.jpg' },
        { id: 6, name: 'Bryan Cranston', status: '', img: 'src/assets/images/07.jpg' },
        { id: 7, name: 'Bryan Cranston', status: '', img: 'src/assets/images/08.jpg' },
        { id: 7, name: 'Bryan Cranston', status: '', img: 'src/assets/images/08.jpg' },
    ].sort(() => Math.random() - 0.5));

    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const previousIndex = useRef(null);

    const matchCheck = (currentCardIndex) => {
        const updatedCards = [...cards];
        if (updatedCards[currentCardIndex].id === updatedCards[selectedCardIndex].id) {
            updatedCards[selectedCardIndex].status = 'active matched';
            updatedCards[currentCardIndex].status = 'active matched';
            setSelectedCardIndex(null);
        } else {
            updatedCards[currentCardIndex].status = 'active';
            setCards(updatedCards);
            setTimeout(() => {
                updatedCards[currentCardIndex].status = '';
                updatedCards[selectedCardIndex].status = '';
                setCards(updatedCards);
                setSelectedCardIndex(null);
            }, 1000);
        }
        setCards(updatedCards);
    };

    const clickHandler = (index) => {
        if (index !== previousIndex.current) {
            if (cards[index].status === 'active matched') {
                alert('already matched');
            } else {
                if (selectedCardIndex === null) {
                    previousIndex.current = index;
                    const updatedCards = [...cards];
                    updatedCards[index].status = 'active';
                    setCards(updatedCards);
                    setSelectedCardIndex(index);
                } else {
                    matchCheck(index);
                    previousIndex.current = null;
                }
            }
        } else {
            alert('card currently selected');
        }
    };

    return (
        <div className="container">
            {cards.map((card, index) => (
                <Card key={index} card={card} index={index} clickHandler={clickHandler} />
            ))}
        </div>
    );
}