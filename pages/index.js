import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Search from './components/Search';
import UploadForm from './components/UploadForm';

export default function Home() {
  return (
    <div >
      <h1>Upload Image</h1>
      <UploadForm />

      <h1>Search</h1>
      <Search />
    </div>
  );
}
