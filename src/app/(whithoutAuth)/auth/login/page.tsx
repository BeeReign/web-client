import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="text-sm text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md md:max-w-lg bg-white rounded-3xl px-5 py-16 md:py-24">
        <Image src="/logo.png" width="576" height="150" alt="BeeReign logo" />
        <div className="mt-14">
          <h1 className="text-4xl">Login</h1>
        </div>
        <form className="mt-14">
          <div className="rounded-md">
            <div className="mb-14 shadow-sm">
              <input
                name="email"
                type="email"
                autoComplete="email"
                maxLength={256}
                className="font-thin appearance-none relative block w-full px-3 py-4 border border-beereign_gray text-gray-900 focus:border-beereign_yellow rounded-md focus:outline-none sm:text-sm"
                placeholder="Correo Electrónico"
              />
            </div>
            <div className="shadow-sm">
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                maxLength={60}
                minLength={8}
                className="font-thin appearance-none rounded-md relative block w-full px-3 py-4 border border-beereign_gray  text-gray-900 focus:border-beereign_yellow focus:outline-none sm:text-sm"
                placeholder="Contraseña"
              />
            </div>
            <div className="text-sm text-left mt-5">
              {/* <a
                className="font-medium font-mono text-beereign_gray hover:text-beereign_yellow"
                onClick={() => setShowModal(true)}
              >
                ¿Olvidaste tu contraseña?
              </a> */}
            </div>
          </div>
          {/* <LoginButton loading={loading} message={"Ingresar"} /> */}
        </form>
      </div>
    </div>
  );
}
