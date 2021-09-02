import AddTask from '../Components/AddTask';
import ListTask from '../Components/ListTask';
import Filter from '../Components/Filter';

const Home = () => {
    return(
        <div className="container" >
            <h1 className="text-center">Todos</h1>
            <Filter />
            <AddTask />
            <ListTask />
        </div>
    );
}

export default Home;