import Link from 'next/link'

export default function Page() {
  return (
    <>
      {
        // Repeat 500 elements
        Array.from({ length: 500 }, (_, i) => (
          <div key={i}>{i}</div>
        ))
      }
      <div>
        <Link href="/loading-scroll" id="to-loading-scroll">
          To loading scroll
        </Link>
      </div>
      <div>
        <Link href="/invisible-first-element" id="to-invisible-first-element">
          To invisible first element
        </Link>
      </div>
    </>
  )
}
