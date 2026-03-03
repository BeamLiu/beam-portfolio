import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface MediaPlayerProps {
    videos?: Array<{ title: string; url: string }>;
    pdfs?: Array<{ title: string; url: string }>;
    image?: string;
    github?: string;
}

export const MediaPlayer = ({ videos, pdfs, image, github }: MediaPlayerProps) => {
    const { t } = useTranslation();
    const [selectedVideo, setSelectedVideo] = useState<string | null>(videos?.[0]?.url || null);
    const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

    return (
        <div className="w-full space-y-4">
            {/* 视频播放区域 */}
            {selectedVideo && (
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                    <video
                        key={selectedVideo}
                        controls
                        className="w-full h-full"
                        src={selectedVideo}
                    >
                        您的浏览器不支持视频播放
                    </video>
                </div>
            )}

            {/* PDF 预览区域 */}
            {selectedPdf && (
                <div className="relative aspect-[4/3] bg-background rounded-lg overflow-hidden border border-border">
                    <iframe
                        key={selectedPdf}
                        src={selectedPdf}
                        className="w-full h-full"
                        title="PDF Viewer"
                    />
                </div>
            )}

            {/* 背景图片 */}
            {!selectedVideo && !selectedPdf && image && (
                <div className="relative aspect-video bg-background rounded-lg overflow-hidden">
                    <img src={image} alt="Preview" className="w-full h-full object-cover" />
                </div>
            )}

            {/* 控制按钮区域 */}
            <div className="flex flex-wrap gap-3">
                {/* 视频选择 */}
                {videos && videos.length > 0 && (
                    <>
                        {videos.map((video, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setSelectedVideo(video.url);
                                    setSelectedPdf(null);
                                }}
                                className={`inline-flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium transition-all ${
                                    selectedVideo === video.url && !selectedPdf
                                        ? 'bg-accent text-white border-accent'
                                        : 'border-border hover:bg-accent/5 hover:text-accent hover:border-accent/30'
                                }`}
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                </svg>
                                {video.title}
                            </button>
                        ))}
                    </>
                )}

                {/* PDF 选择 */}
                {pdfs && pdfs.length > 0 && (
                    <>
                        {pdfs.map((pdf, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setSelectedPdf(pdf.url);
                                    setSelectedVideo(null);
                                }}
                                className={`inline-flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium transition-all ${
                                    selectedPdf === pdf.url
                                        ? 'bg-accent text-white border-accent'
                                        : 'border-border hover:bg-accent/5 hover:text-accent hover:border-accent/30'
                                }`}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                {pdf.title}
                            </button>
                        ))}
                    </>
                )}

                {/* GitHub 链接 */}
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm font-medium hover:bg-accent/5 hover:text-accent hover:border-accent/30 transition-all"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                    </a>
                )}
            </div>
        </div>
    );
};
