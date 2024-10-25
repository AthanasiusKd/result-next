import Logo from "@/img/logo.jpg";
import Image from "next/image";

export default function HomeHeader() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Image
          src={Logo}
          alt="logo"
          width={166}
          height={166}
          style={{ borderRadius: "10px" }}
          priority
        />
      </div>
      <p className="login-text title">GAIUS OBASEKI INTERNATIONAL SCHOOL</p>
      <div className="gap-2 d-flex flex-column">
        <p className="login-text">
          Address: 32 Dawson Lane, Off Mission Road, New Benin, Benin City,
          Nigeria.
        </p>
        <p className="login-text">
          Phone: 0906 948 4848, 0803 790 3632
          <span style={{ color: "rgb(8, 8, 9)" }}></span>
        </p>
        <p className="login-text">Email: gofschools@gmail.com</p>
      </div>
    </div>
  );
}
