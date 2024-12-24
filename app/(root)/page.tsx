import Image from 'next/image';
import SearchForm from '../../components/search-form';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  return (
    <>
      <section className='pink_container'>
        <p>Pitch, Vote and Grow</p>
        <h1 className='heading'>
          Pitch your startup, <br /> connect with entrepreneurs
        </h1>
        <p className='sub-heading !max-w-3xl'>
          Submit ideas, vote on pitches and get noticed in virtual competitions
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
