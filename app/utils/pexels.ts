const PEXELS_API_KEY = 'dbhBo4u0vIfODU9Ghz1vEgk2dcpEDrfTqSxS14G4nOrHWmr7YPB9kr0g';
const PEXELS_API_URL = 'https://api.pexels.com/v1';

export interface PexelsPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
}

export interface PexelsResponse {
  total_results: number;
  page: number;
  per_page: number;
  photos: PexelsPhoto[];
  next_page: string;
}

export async function searchPexelsImages(query: string, perPage: number = 1): Promise<PexelsPhoto[]> {
  try {
    const response = await fetch(
      `${PEXELS_API_URL}/search?query=${encodeURIComponent(query)}&per_page=${perPage}`,
      {
        headers: {
          'Authorization': PEXELS_API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.status}`);
    }

    const data: PexelsResponse = await response.json();
    return data.photos;
  } catch (error) {
    console.error('Error fetching images from Pexels:', error);
    return [];
  }
}

export async function getProfessionalPortrait(): Promise<string> {
  const photos = await searchPexelsImages('professional headshot business person', 1);
  return photos[0]?.src.large || '/default-profile.jpg';
}

export async function getBackgroundImage(): Promise<string> {
  const photos = await searchPexelsImages('abstract technology background', 1);
  return photos[0]?.src.large || '/default-background.jpg';
}

export async function getWorkplaceImage(): Promise<string> {
  const photos = await searchPexelsImages('modern office workspace', 1);
  return photos[0]?.src.large || '/default-workplace.jpg';
}
