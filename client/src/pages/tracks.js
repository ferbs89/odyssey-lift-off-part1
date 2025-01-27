import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { Layout, QueryResult } from '../components';
import TrackCard from '../containers/track-card';

const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult loading={loading} error={error} data={data}>
        {data?.tracksForHome?.map(track => (
          <TrackCard
            key={track.id}
            track={track}
          />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
