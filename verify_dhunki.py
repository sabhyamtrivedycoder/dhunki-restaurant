import os
import time
from playwright.sync_api import sync_playwright

output_dir = "C:/Users/PC/.gemini/antigravity/scratch/dhunki-restaurant/preview_shots"
os.makedirs(output_dir, exist_ok=True)

url = "http://localhost:4180"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    
    console_errors = []
    page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)
    page.on("pageerror", lambda err: console_errors.append(str(err)))
    
    print("Navigating to Dhunki Restaurant preview...")
    page.goto(url, wait_until="networkidle", timeout=15000)
    page.wait_for_timeout(2000)
    
    # 1. Hero
    page.screenshot(path=os.path.join(output_dir, "01_hero.png"))
    print("Captured 01_hero.png")
    
    # 2. About
    about = page.locator("#about")
    about.scroll_into_view_if_needed()
    page.wait_for_timeout(800)
    page.screenshot(path=os.path.join(output_dir, "02_about.png"))
    print("Captured 02_about.png")
    
    # 3. Menu
    menu = page.locator("#menu")
    menu.scroll_into_view_if_needed()
    page.wait_for_timeout(800)
    page.screenshot(path=os.path.join(output_dir, "03_menu_all.png"))
    print("Captured 03_menu_all.png")
    
    # Test Chinese Filter
    page.locator("button[data-filter='chinese']").click()
    page.wait_for_timeout(400)
    page.screenshot(path=os.path.join(output_dir, "04_menu_chinese.png"))
    print("Captured 04_menu_chinese.png")
    
    # Test Search
    page.locator("#menu-search-input").fill("Lollypop")
    page.wait_for_timeout(400)
    page.screenshot(path=os.path.join(output_dir, "05_menu_search.png"))
    print("Captured 05_menu_search.png")
    page.locator("#menu-search-input").fill("")
    page.locator("button[data-filter='all']").click()
    page.wait_for_timeout(300)
    
    # 4. Gallery
    gallery = page.locator("#gallery")
    gallery.scroll_into_view_if_needed()
    page.wait_for_timeout(800)
    page.screenshot(path=os.path.join(output_dir, "06_gallery.png"))
    print("Captured 06_gallery.png")
    
    # 5. Banquet
    banquet = page.locator("#banquet")
    banquet.scroll_into_view_if_needed()
    page.wait_for_timeout(800)
    page.screenshot(path=os.path.join(output_dir, "07_banquet.png"))
    print("Captured 07_banquet.png")
    
    # 6. Reservation & Contact
    res = page.locator("#reservation")
    res.scroll_into_view_if_needed()
    page.wait_for_timeout(800)
    page.screenshot(path=os.path.join(output_dir, "08_reservation.png"))
    print("Captured 08_reservation.png")
    
    # 7. Printed Menu Modal
    page.locator("#btn-view-menucard").click()
    page.wait_for_timeout(500)
    page.screenshot(path=os.path.join(output_dir, "09_printed_menu_modal.png"))
    print("Captured 09_printed_menu_modal.png")
    page.keyboard.press("Escape")
    page.wait_for_timeout(300)
    
    print("\nConsole errors encountered:", console_errors)
    browser.close()
    print("Dhunki verification complete!")
