import React, { useState, useEffect } from 'react';

import NotionSkeleton from './NotionsSkeleton';
import Notion from '../Notion/Notion';

import axios from 'axios';

export interface INotion {
  id: string;
  title: string;
  previewText: string;
  createdAt: string;
}

const Notions = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [notions, setNotions] = useState<INotion[]>([]);
  const skeletons = [...new Array(5)].map((item, index) => <NotionSkeleton key={index}/>);



  useEffect(() => {    
    const getNotions = async () => {
        const response:any = await axios.get<INotion[]>('https://6376615781a568fc25fd369f.mockapi.io/api/notions');
        setIsLoading(false);
        return setNotions(response.data);
    };

    getNotions();
  }, []);

  return (
    <div className="notions">
      <div className="notions-top">
        <h3 className="notions-top-title">Уведомления</h3>
      </div>
      <div className="notions-bottom">
        {isLoading ? skeletons : notions?.map((notion) => <Notion key={notion.id} createdAt={notion.createdAt} title={notion.title} previewText={notion.previewText} />)}
      </div>
    </div>
  );
};

export default Notions;
