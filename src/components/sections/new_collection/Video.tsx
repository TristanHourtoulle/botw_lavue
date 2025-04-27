'use client';

import Script from 'next/script';

export const Video = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center">
            <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[1494px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[840px]">
                <iframe
                    src="https://player.vimeo.com/video/1070861527?h=3f725a319d&badge=0&autopause=0&player_id=0&app_id=58479&byline=0&title=0&portrait=0"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    className="w-full h-full"
                    title="FullVersion"
                />
            </div>
            <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />
        </section>
    );
};
