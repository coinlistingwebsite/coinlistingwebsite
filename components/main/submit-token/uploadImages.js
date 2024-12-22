const ImageUploader = ({ imageState, setImageState }) => {
  const validateImage = async (file, type) => {
    // Reset error state first
    setImageState((prev) => ({
      ...prev,
      [`${type}Error`]: null,
    }));

    // Basic file checks
    if (!file) return false;

    // Check file type
    const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!validTypes.includes(file.type)) {
      setImageState((prev) => ({
        ...prev,
        [`${type}Error`]:
          "Please upload a valid image (JPG, PNG, GIF, or WEBP)",
      }));
      return false;
    }

    // Check file size (1MB = 1000000 bytes, 5MB = 5000000 bytes)
    const maxSize = type === "logo" ? 1000000 : 5000000;
    const sizeLabel = type === "logo" ? "1MB" : "5MB";
    if (file.size > maxSize) {
      setImageState((prev) => ({
        ...prev,
        [`${type}Error`]: `Image must be smaller than ${sizeLabel}`,
      }));
      return false;
    }

    // Check image dimensions
    try {
      const dimensionsValid = await new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          URL.revokeObjectURL(img.src); // Clean up

          if (type === "logo") {
            // Logo should be square and at least 200x200
            if (img.width !== img.height) {
              setImageState((prev) => ({
                ...prev,
                logoError: "Logo must be square (equal width and height)",
              }));
              resolve(false);
            } else if (img.width < 200) {
              setImageState((prev) => ({
                ...prev,
                logoError: "Logo must be at least 200x200 pixels",
              }));
              resolve(false);
            } else {
              resolve(true);
            }
          } else if (type === "banner") {
            // Banner only needs to meet minimum width requirement
            if (img.width < 700) {
              setImageState((prev) => ({
                ...prev,
                bannerError: "Banner must be at least 700 pixels wide",
              }));
              resolve(false);
            } else {
              resolve(true);
            }
          }
        };
        img.onerror = () => {
          setImageState((prev) => ({
            ...prev,
            [`${type}Error`]: "Failed to load image. Please try another file",
          }));
          resolve(false);
        };
        img.src = URL.createObjectURL(file);
      });

      return dimensionsValid;
    } catch (error) {
      setImageState((prev) => ({
        ...prev,
        [`${type}Error`]: "Error validating image dimensions",
      }));
      return false;
    }
  };

  const handleImageChange = async (type, file) => {
    if (!file) {
      // Handle image removal
      setImageState((prev) => ({
        ...prev,
        [type]: null,
        [`${type}Error`]: null,
      }));
      return;
    }

    // Validate image before setting
    const isValid = await validateImage(file, type);
    if (isValid) {
      setImageState((prev) => ({
        ...prev,
        [type]: file,
        [`${type}Error`]: null,
      }));
    }
  };

  return (
    <div className="space-y-8 my-5">
      {/* Logo Section */}
      <div className="flex justify-center items-center flex-col">
        <span className="submit_token_text mb-4 font-bold">Logo Image</span>
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mask mask-circle">
            {imageState.logo ? (
              <img
                src={URL.createObjectURL(imageState.logo)}
                alt="Uploaded logo"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src="/2.png"
                alt="Default logo"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>

        <div className="mt-5 space-x-4">
          <label className="btn btn-primary" htmlFor="logo-upload">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            Upload Logo
            <input
              type="file"
              id="logo-upload"
              className="sr-only"
              onChange={(e) => handleImageChange("logo", e.target.files?.[0])}
              accept="image/jpeg,image/png,image/gif,image/webp"
            />
          </label>

          <button
            className="btn btn-error"
            onClick={() => handleImageChange("logo", null)}
            disabled={!imageState.logo}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Remove Logo
          </button>
        </div>
        <div className="label">
          <span className="submit_token_text">
            3 conditions MUST be met: (1) Transparent background; (2) Square
            (200x200); unequal dimensions will be rejected! (3) PNG format. If
            possible.
          </span>
        </div>

        {imageState.logoError && (
          <div className="text-error text-sm mt-2">{imageState.logoError}</div>
        )}
      </div>

      {/* Banner Section */}
      <div className="flex justify-center items-center flex-col">
        <span className="submit_token_text mb-4 font-bold ">Banner Image</span>
        <div className="w-full max-w-2xl h-48 ring ring-primary ring-offset-base-100 ring-offset-2 rounded-lg overflow-hidden">
          {imageState.banner ? (
            <img
              src={URL.createObjectURL(imageState.banner)}
              alt="Uploaded banner"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-base-300 flex items-center justify-center">
              <span className="text-base-content opacity-50">
                Upload a banner image (minimum width: 700px)
              </span>
            </div>
          )}
        </div>

        <div className="mt-5 space-x-4">
          <label className="btn btn-primary" htmlFor="banner-upload">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            Upload Banner
            <input
              type="file"
              id="banner-upload"
              className="sr-only"
              onChange={(e) => handleImageChange("banner", e.target.files?.[0])}
              accept="image/jpeg,image/png,image/gif,image/webp"
            />
          </label>

          <button
            className="btn btn-error"
            onClick={() => handleImageChange("banner", null)}
            disabled={!imageState.banner}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Remove Banner
          </button>
        </div>

        <div className="label">
          <span className="submit_token_text">
            3 conditions MUST be met: (1) Transparent background; (2) Rectangle
            (700x200);
          </span>
        </div>

        {imageState.bannerError && (
          <div className="text-error text-sm mt-2">
            {imageState.bannerError}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
