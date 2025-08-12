import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { fetchData, youtubeOptions } from '../utils/fetchData';

const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

const ExerciseCard = ({ exercise }) => {
  const [thumbnail, setThumbnail] = useState('');

  useEffect(() => {
    const fetchThumbnail = async () => {
      try {
        const searchQuery = `${youtubeSearchUrl}/search?query=${exercise.name}`;
        const youtubeData = await fetchData(searchQuery, youtubeOptions);

        // ✅ Filter out YouTube Shorts
        const nonShorts = youtubeData?.contents?.filter(
          (item) => item.video && !item.video.isShort
        );

        const thumbnailUrl = nonShorts?.[0]?.video?.thumbnails?.[0]?.url;

        if (thumbnailUrl) {
          setThumbnail(thumbnailUrl);
        } else {
          setThumbnail('/fallback.png'); // 👈 fallback if no thumbnail
        }
      } catch (error) {
        console.error('Failed to fetch YouTube thumbnail:', error);
        setThumbnail('/fallback.png'); // 👈 fallback on error
      }
    };

    fetchThumbnail();
  }, [exercise.name]);

  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img
        src={thumbnail}
        alt={exercise.name}
        loading="lazy"
        style={{ width: '100%', height: 'auto' }}
      />

      <Stack direction="row">
        <Button
          sx={{
            ml: '21px',
            color: '#fff',
            background: '#ffa9a9',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize'
          }}
        >
          {exercise.bodyPart}
        </Button>

        <Button
          sx={{
            ml: '21px',
            color: '#fff',
            background: '#fcc757',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize'
          }}
        >
          {exercise.target}
        </Button>
      </Stack>

      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="22px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
