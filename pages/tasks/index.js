import Meta from '../../components/layout/Meta';
import TaskList from '../../components/TaskList';

import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = ({ tasks }) => {
    return (
        <>
            <Meta title={`Tasks ${tasks.length}`} />
            <div className='container'>
                <div className='row'>
                    <div className='input-group mb-3'>
                        <input type='text' className='form-control' placeholder='' />
                        <button className='btn btn-outline-secondary' type='button'>Button</button>
                    </div>
                </div>
                <div className='row'>
                    <TaskList tasks={tasks}/>
                </div>
            </div>
        </>
    );
}

export const getStaticProps = async () => {
    const { data } = await axios.get('http://localhost:8080/api/v1/tasks');

    return {
        props: {
            tasks: data
        }
    };
};

export default Home