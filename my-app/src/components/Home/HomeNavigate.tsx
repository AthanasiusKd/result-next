import Link from "next/link";

function HomeNavigate() {
  return (
    <div>
      <div className="student-link-div">
        <Link className="check-link" href='/check-result'>
          CHECK RESULT
        </Link>
      </div>
    </div>
  );
}

export default HomeNavigate;
