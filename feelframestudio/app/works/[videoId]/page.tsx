import React from 'react';
import Video from './Video';

export default async function VideoPage(props: { params: Promise<{ videoId: string }> }) {
  const { videoId } = await props.params; // ✅ await before accessing
  return <Video videoId={videoId} />;
}
