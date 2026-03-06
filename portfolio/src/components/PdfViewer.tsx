import { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

interface PdfViewerProps {
    url: string;
}

export const PdfViewer = ({ url }: PdfViewerProps) => {
    const [numPages, setNumPages] = useState<number>();
    const [error, setError] = useState<Error | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState<number>();

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.clientWidth);
            }
        };

        // Initial width
        updateWidth();

        // Update width on resize
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
        setError(null);
    }

    function onDocumentLoadError(err: Error): void {
        console.error("PDF Load Error:", err);
        setError(err);
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center p-8 bg-muted rounded-lg border border-border h-full">
                <svg className="w-12 h-12 text-muted-foreground mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h3 className="text-lg font-medium text-foreground mb-2">无法在线预览 / Preview Unavailable</h3>
                <p className="text-sm text-muted-foreground mb-6 text-center max-w-md">
                    由于跨域限制或文件读取失败，无法直接在线预览支持。请点击下方按钮直接打开或下载文件。<br />
                    The PDF cannot be previewed online.
                </p>
                <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    在新标签页中打开 / Open PDF
                </a>
            </div>
        );
    }

    return (
        <div className="w-full h-full overflow-y-auto overflow-x-hidden bg-gray-100 dark:bg-black/40 flex flex-col items-center custom-scrollbar" ref={containerRef} style={{ maxHeight: '100%', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
            <Document
                file={url}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={
                    <div className="flex items-center justify-center p-12 text-muted-foreground h-full">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        加载文档中 / Loading...
                    </div>
                }
            >
                {Array.from(new Array(numPages || 0), (_, index) => (
                    <div key={`page_${index + 1}`} className="my-4 shadow-md bg-white">
                        <Page
                            pageNumber={index + 1}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                            width={containerWidth ? containerWidth * 0.95 : undefined}
                            className="max-w-full"
                        />
                    </div>
                ))}
            </Document>
        </div>
    );
};
