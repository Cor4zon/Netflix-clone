import "./Modal.scss";
import { MovieType } from '@/types/lib';

type ModalProps = {
    movie: MovieType,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const Modal = ({ movie, setIsModalOpen }: ModalProps) => {
    
    const closeModalHandler = (event: any) => {
        if (event.target.className === 'modal-background') {
            setIsModalOpen(false)
        }
    }
    
    return (
        <>
            <div className='modal-background' onClick={closeModalHandler}>
            </div>
            <div className='modal'>
                    <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>X</button>
                    <div className="modal-image" id={String(movie?._id)} style={{backgroundImage: 'url(' + movie?.img + ')'}}></div>
                    <p>{movie?.title}</p>
                    <p>{movie?.desc}</p>
                    <p>{movie?.year}</p>
                    <p>{movie?.genre}</p>
                    <p>{movie?.isSeries}</p>
            </div>
        </>
        
    );
};

export default Modal;