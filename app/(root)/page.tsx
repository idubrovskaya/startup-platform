import StartupCard from '@/components/startup-card';
import SearchForm from '../../components/search-form';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      author: { _id: '1', name: 'John Doe' },
      description: 'This is a startup description',
      view: 55,
      title: 'we robot',
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
  ];

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

      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>

        <ul className='mt-7 card_grid'>
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className='no-results'>No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
