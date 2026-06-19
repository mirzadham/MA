# Cloudflare R2 Hosting Guide (mimos-academy.com)

You have successfully enabled the **Public Development URL** for your Cloudflare R2 bucket:
`https://pub-33737b2aa9d84562932483aa2479fcaa.r2.dev`

The code in `src/data/trainings.js` has already been updated to point to this URL. Here are the steps to finish the setup and make the website live:

---

## 📂 Step 1: Upload Your Optimized WebP Images to R2

Since your bucket is public, we need to upload the optimized WebP images so Cloudflare can serve them:

1. Open your web browser and go to your **Cloudflare Dashboard** > **R2** > click **`training-programs`** bucket.
2. In the **Objects** tab, click **Upload** > **Files**.
3. Select **all** the `.webp` files from your local folder:
   `c:\Users\ADMIN 2025\Documents\MA\src\assets\images_webp\`
4. Upload them directly. 
   > [!IMPORTANT]
   > Do **NOT** create any folders in the bucket. Upload the files directly so they sit at the root level of the bucket.

---

## 🔍 Step 2: Verify Your R2 Link is Working

After uploading the files, check if they can be accessed publicly:
1. Open a new tab in your browser and go to:
   ```text
   https://pub-33737b2aa9d84562932483aa2479fcaa.r2.dev/logo.webp
   ```
2. If your academy logo displays on the screen, **your R2 bucket is working perfectly!**

---

## 🚀 Step 3: Build and Upload Your Website to cPanel

Now that the code points to R2, we need to compile the website and upload the updated code:

1. **Build the project**: In your terminal in the IDE, run:
   ```bash
   npm run build
   ```
   *(This compiles the code. Notice how the build completes in under 1 second, because the images are not being packaged inside it!)*

2. **Upload using WinSCP**:
   - Open **WinSCP** and connect to your cPanel hosting.
   - Go to your public folder (usually `public_html`).
   - Drag and drop **everything inside** your local `dist` folder into cPanel, overwriting the old files.
   - You do **not** need to upload any images folder to cPanel anymore!

3. Open [mimos-academy.com](https://mimos-academy.com) in your browser. Your page will load instantly, fetching all training images directly from Cloudflare R2.
