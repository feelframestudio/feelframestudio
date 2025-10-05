export interface MediaData {
    id: number;
    attributes: {
        url: string;
        mime: string;
        name: string;
    };
}

export interface VideoAttributes {
    title: string;
    shortDescription: string;
    longDescription: string;
    youtubeLink: string;
    previewVideo: {
        data: MediaData | null;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface VideoItem {
    id: number;
    title: string;
    shortDescription: string;
    longDescription: string;
    youtubeLink: string;
    previewVideo?: {
        url?: string;
        mime?: string;
        name?: string;
        // add other fields as needed
    };
}
