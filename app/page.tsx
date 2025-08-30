"use client"
export default function Page() {
  
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <div className="flex items-center justify-center flex-col p-10 ring-1 ring-sky-500 rounded-sm">
          <h1>hi! go to dashboard</h1>
          <a href="/dashboard" className="text-sky-300">/dashboard</a>
        </div>
      </div>
    </>
  );
}
