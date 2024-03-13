import { useSelector } from 'react-redux';
import './style.scss'
const Genres = ({data}) => {
    const {genres} = useSelector((state) => state.home)
    return (
        <div className='genres'>
            {
                data?.map((item) => {
                    if(!genres[item]?.name){
                        return;
                    }
                    return (
                        <div className="genre" key={item.id}>
                            {genres[item]?.name}
                        </div>

                    )
                })
            } 
        </div>
    );
};

export default Genres;