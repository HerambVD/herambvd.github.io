import React from 'react';
import ShimmerButton from '@/components/ui/shimmer-button'; // Ensure your path to ShimmerButton is correct

interface ShimmerDownloadButtonProps {
  text: string;  // Accept dynamic text for the button
}

const ShimmerDownloadButton: React.FC<ShimmerDownloadButtonProps> = ({ text }) => {
  const handleDownload = () => {
    // Create an invisible anchor element to trigger the download
    const link = document.createElement('a');
    link.href = '/assets/pdf/resume-heramb-2025v.pdf'; // Path to the PDF file
    link.download = 'resume-heramb-2025v.pdf'; // Specify the filename for the downloaded file
    link.click(); // Trigger the download
  };

  return (
    <ShimmerButton className="min-w-[100px] text-white" onClick={handleDownload}>
      <span className='px-8 text-white'>{text}</span>
    </ShimmerButton>
  );
};

export default ShimmerDownloadButton;
