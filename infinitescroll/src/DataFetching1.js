import React,{useState,useEffect,useRef} from 'react';
import axios from 'axios';

const DataFetching1 = () => {
    const [loading, setLoading] = useState(true);
    const [allUsers, setAllUsers] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [lastElement, setLastElement] = useState(null);

    
    let TOTAL_PAGES=3;

    const observer = useRef(
        
        new IntersectionObserver(
            
            (entries) => {
                const first = entries[0];
                if (first.isIntersecting) {
                    setPageNum((no) => no + 1);
                    console.log("A")
                }
            })
            
    );

    const callUser = async  () => {
        console.log("Z")
        setLoading(true);
        console.log("Y")
        let response =await axios.get(
            `https://randomuser.me/api/?page=${pageNum}&results=25&seed=abc`
        );
        console.log("B")
        let all = new Set([...allUsers, ...response.data.results]);
        // TOTAL_PAGES=Math.ceil(all/25);
        setAllUsers([...all]);
        setLoading(false);
        console.log("B1")
    };
    

    useEffect(() => {
        console.log("X")
        if (pageNum <= TOTAL_PAGES) {
            console.log("C")
            callUser();

        }
    }, [pageNum]);

    useEffect(() => {
        console.log("D")
        const currentElement = lastElement;
        const currentObserver = observer.current;

        if (currentElement) {
            console.log("D1")
            currentObserver.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement);
            }
        };
        
    }, [lastElement]);

    const UserCard = ({ data }) => {
        return (
            <div className='p-4 border border-gray-500 rounded bg-white flex items-center'>
                <div>
                    <img
                        src={data.picture.medium}
                        className='w-16 h-16 rounded-full border-2 border-green-600'
                        alt='user'
                    />
                </div>

                <div className='ml-3'>
                    <p className='text-base font-bold'>
                        {data.name.first} {data.name.last}
                    </p>
                    <p className='text-sm text-gray-800'>
                        {data.location.city}, {data.location.country}
                    </p>
                    <p className='text-sm text-gray-500 break-all'>
                        {data.email}
                    </p>
                </div>
            </div>
        );
    };

    return (
        <div >
            
                {allUsers.length > 0 &&
                    allUsers.map((user, i) => {
                        return i === allUsers.length - 1 &&
                            !loading &&
                            pageNum <= TOTAL_PAGES ? (
                            <div
                                key={`${user.name.first}-${i}`}
                                ref={setLastElement}
                            >
                                <UserCard data={user} />
                            </div>
                        ) : (
                            <UserCard
                                data={user}
                                key={`${user.name.first}-${i}`}
                            />
                        );
                    })}
            
            

            {pageNum - 1 === TOTAL_PAGES  }
        </div>
    );
};

export default DataFetching1