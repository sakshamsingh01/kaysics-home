import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Centered content */}
        <div className="flex flex-col items-center py-8 md:py-12">
          {/* Logo */}
          <div className="mb-3">
            <Logo />
          </div>
          {/* Copyright text */}
          <p className="text-sm text-indigo-200/65">© Kaysics Info LLP</p>
          <p className="text-sm text-indigo-200/65"><a href="mailto:contact@kaysics.com">contact@kaysics.com</a></p>
          {/* Address */}
          <p className="text-sm text-indigo-200/65">Venkatala, Bengaluru, Karnataka 560064</p>
        </div>
      </div>
    </footer>
  );
}
