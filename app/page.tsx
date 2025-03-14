"use client";
import Tabs from './components/tabs';
export default function HomePage() {
  return (
    <div>
      <h1>Transcript Enhancer</h1>
      {/* Render your form tabs */}
      <Tabs tab1="URL" tab2="Upload" tab3="Text" />
    </div>
  );
}
