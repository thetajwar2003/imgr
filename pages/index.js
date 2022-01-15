import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from './components/Header';
import Search from './components/Search';
import UploadForm from './components/UploadForm';

export default function Home() {
  return (
    <div className='h-screen bg-gray-100'>
      <Header>
        <title>Imgr</title>
      </Header>
      < div className='max-w-screen-xl mx-auto '>
        <Search />
      </div>
    </div>
  );
}
