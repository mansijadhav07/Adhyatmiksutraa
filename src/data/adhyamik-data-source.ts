export const categories = [
  {
    name: "Crystals",
    slug: "crystals",
    description: "Natural energised crystals, geode clusters, and hand-strung bead bracelets for protective and spiritual harmony.",
    image_url: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80",
    display_order: 1,
    is_active: true
  },
  {
    name: "Healing Candles",
    slug: "healing-candles",
    description: "Hand-poured wish manifesting candles infused with crystals and natural herbal intentions.",
    image_url: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80",
    display_order: 2,
    is_active: true
  },
  {
    name: "Infused Roll-On",
    slug: "infused-roll-on",
    description: "Therapeutic oil roll-ons infused with premium essential oils and energetic charges.",
    image_url: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80",
    display_order: 3,
    is_active: true
  },
  {
    name: "Energy Infused Salt",
    slug: "energy-infused-salt",
    description: "Intentional bath and home cleansing salts charged for auric detoxification.",
    image_url: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80",
    display_order: 4,
    is_active: true
  },
  {
    name: "Combo Set",
    slug: "combo-set",
    description: "Curated combinations of energy-infused candles, salts, and crystals for complete healing rituals.",
    image_url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
    display_order: 5,
    is_active: true
  },
  {
    name: "Ebooks",
    slug: "ebooks",
    description: "Digital guides on occult sciences, angel healing rituals, and crystal care.",
    image_url: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=600&q=80",
    display_order: 6,
    is_active: true
  }
];

export const products = [
  {
    name: "Kamakhya Devi Sindoor",
    slug: "kamakhya-devi-sindoor",
    short_description: "Pure, high-vibration spiritual Sindoor sourced from the sacred Kamakhya temple.",
    description: "Sourced directly from the Kamakhya temple and charged with intense high-vibrational energy. Best used for protective shielding, positive relationships, and magnetising abundance. A little goes a long way to establish a powerful daily auric protection shield.",
    price: 3999,
    sale_price: 3500,
    sku: "KDS-001",
    stock_quantity: 45,
    stock_status: "in_stock",
    manage_stock: true,
    category_slug: "crystals",
    images: ["https://images.unsplash.com/photo-1609137144814-722a2bbff607?auto=format&fit=crop&w=600&q=80"],
    featured_image: "https://images.unsplash.com/photo-1609137144814-722a2bbff607?auto=format&fit=crop&w=600&q=80",
    is_featured: true,
    is_active: true,
    homepage_section: "featured",
    highlights: ["Sourced from Kamakhya Temple", "Charged under full moon energy", "Improves relationship harmony", "Intense auric protection"],
    additional_info: [
      { label: "Origin", value: "Assam, India" },
      { label: "Weight", value: "10 grams" },
      { label: "Ritual Use", value: "Apply a small dot on the forehead during daily prayers" }
    ],
    care_instructions: "Store in a cool, dry place. Keep away from water and metal containers."
  },
  {
    name: "Negativity & Nazar Healing Candle",
    slug: "negativity-nazar-healing-candle",
    short_description: "Hand-poured intention candle to clear toxic energies and protect against the evil eye.",
    description: "Clear away toxic vibrations, establish protective shielding, and ward off the evil eye. Made with 100% natural soy wax, infused with handpicked herbs, and charged with black tourmaline and obsidian crystals to absorb negative vibrations in your environment.",
    price: 1515,
    sale_price: 1299,
    sku: "NNC-002",
    stock_quantity: 80,
    stock_status: "in_stock",
    manage_stock: true,
    category_slug: "healing-candles",
    images: ["https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80"],
    featured_image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80",
    is_featured: true,
    is_active: true,
    homepage_section: "best_sellers",
    highlights: ["Infused with Black Tourmaline", "Lavender & Sage scented", "Wards off evil eye (Nazar)", "Hand-poured with love"],
    additional_info: [
      { label: "Wax Type", value: "100% Natural Soy Wax" },
      { label: "Burn Time", value: "35 Hours" },
      { label: "Size", value: "250g" }
    ],
    care_instructions: "Trim wick to 1/4 inch before burning. Burn for at least 2 hours on the first light to ensure even melting."
  },
  {
    name: "Job Success Candle",
    slug: "job-success-candle",
    short_description: "Invite career breakthroughs, wealth, and positive interview outcomes.",
    description: "Open doors of professional opportunity, abundance, and success. Infused with green aventurine (the stone of opportunity), pyrite (fool's gold for wealth), and pure cinnamon bark oil to stimulate positive action and success in interviews and business ventures.",
    price: 888,
    sale_price: 777,
    sku: "JSC-003",
    stock_quantity: 60,
    stock_status: "in_stock",
    manage_stock: true,
    category_slug: "healing-candles",
    images: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"],
    featured_image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    is_featured: false,
    is_active: true,
    homepage_section: "new_arrivals",
    highlights: ["Pyrite and Green Aventurine infusion", "Cinnamon & Orange aromatherapy", "Attracts financial luck", "Ideal for office or study"],
    additional_info: [
      { label: "Wax Type", value: "Soy-Beeswax Blend" },
      { label: "Burn Time", value: "25 Hours" },
      { label: "Weight", value: "180g" }
    ]
  },
  {
    name: "Prosperity Bracelet",
    slug: "prosperity-bracelet",
    short_description: "A triple money-magnet combination of Citrine, Pyrite, and Green Aventurine.",
    description: "Manifest wealth, lock in prosperity, and clear money blocks. Hand-strung with high-quality, authentic Citrine beads for joy and abundance, Pyrite for business opportunities, and Green Aventurine for pure luck.",
    price: 1499,
    sale_price: 1199,
    sku: "PRB-004",
    stock_quantity: 120,
    stock_status: "in_stock",
    manage_stock: true,
    category_slug: "crystals",
    images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"],
    featured_image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
    is_featured: true,
    is_active: true,
    homepage_section: "best_sellers",
    highlights: ["Authentic AAA-grade crystals", "Double-elastic support", "Pre-cleansed and energised", "Fits wrist sizes 6 to 7.5 inches"]
  },
  {
    name: "7 Chakra Balance Bracelet",
    slug: "7-chakra-balance-bracelet",
    short_description: "Align your energy centers and establish holistic balance.",
    description: "Aligns all seven energy centers of the body for holistic well-being and clear auric flow. Includes amethyst, sodalite, turquoise, green aventurine, tiger eye, carnelian, and red jasper beads.",
    price: 1100,
    sku: "7CB-005",
    stock_quantity: 90,
    category_slug: "crystals",
    images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80"],
    featured_image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80",
    is_featured: false,
    is_active: true,
    homepage_section: "on_sale"
  },
  {
    name: "Smoky Quartz Cluster",
    slug: "smoky-quartz-cluster",
    short_description: "Powerful grounding crystal to absorb electromagnetic smog and stress.",
    description: "An excellent grounding stone that gently neutralises negative vibrations and detoxifies the emotional body. Place it near your workspace, laptops, or routers to absorb electromagnetic smog.",
    price: 1800,
    sku: "SQC-006",
    stock_quantity: 15,
    category_slug: "crystals",
    images: ["https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80"],
    featured_image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80",
    is_featured: false,
    is_active: true
  },
  {
    name: "Aura Cleansing Spray",
    slug: "aura-cleansing-spray",
    short_description: "Clear negative energy on the go with sage and clear quartz essences.",
    description: "Infused with pure essential oils of white sage, sandalwood, rosewater, and charged clear quartz crystals to instantly clear negative energy from your aura and surroundings without the smoke of traditional sage smudging.",
    price: 550,
    sku: "ACS-007",
    stock_quantity: 110,
    category_slug: "infused-roll-on",
    images: ["https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80"],
    featured_image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80",
    is_active: true
  },
  {
    name: "Prosperity Intention Bath Salt",
    slug: "prosperity-intention-bath-salt",
    short_description: "Magical bath salt charged with wealth vibrations.",
    description: "Energy-infused bath salt to clear blocks blocking wealth, success, and prosperity. Hand-mixed Epsom salt with gold leaf, cinnamon, basil leaf, and prosperity oils.",
    price: 599,
    sku: "PIB-008",
    stock_quantity: 75,
    category_slug: "energy-infused-salt",
    images: ["https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80"],
    featured_image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80",
    is_active: true
  }
];

export const courses = [
  {
    title: "Angel Healing Certification",
    slug: "angel-healing-certification",
    subtitle: "Connect with divine angelic energies to heal yourself and guide others.",
    description: "Learn how to call upon the Archangels to clear blocks, protect your aura, and channel divine light. This comprehensive course covers angel symbols, prayers, and interactive card reading layouts.",
    price: 3500,
    featured_image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
    duration: "4 Weeks (Self-Paced + Live Q&A)",
    level: "all",
    category: "Healing",
    highlights: ["Learn to connect with Archangels Michael, Raphael & Gabriel", "Understand Angel numbers and synchronicities", "Perform auric clearing on clients", "Receive an Adhyatmik Sutraa Healer Certificate"],
    curriculum: [
      {
        title: "Introduction to Angelic Realms",
        description: "Understanding the hierarchy of angels and how they interact with human energy fields."
      },
      {
        title: "The Archangels & Their Modalities",
        description: "Focusing on Archangel Michael (Protection), Raphael (Healing), and Uriel (Wisdom)."
      },
      {
        title: "Dowsing & Card Layouts",
        description: "How to use angel cards and pendulums to read energy and receive guidance."
      }
    ],
    what_you_receive: [
      { text: "Detailed PDF manuals and charts" },
      { text: "Recorded meditation audios for angel alignment" },
      { text: "Lifetime access to student support group" },
      { text: "Official certification of completion" }
    ],
    who_is_this_for: [
      { text: "Spiritual seekers seeking personal transformation" },
      { text: "Reiki and yoga practitioners adding divine healing to their practice" },
      { text: "Beginners with no prior experience" }
    ],
    bonuses: [
      { text: "Free Archangel Protection Meditation audio" },
      { text: "One session review with founder Sonali" }
    ],
    instructor: {
      name: "Sonali Bhattacharya",
      title: "Founder & Spiritual Mentor",
      bio: "Sonali Bhattacharya is an occult consultant and life coach with over 10 years of experience in angel healing and tarot."
    },
    status: "published",
    featured: true,
    display_order: 1
  },
  {
    title: "Tarot Card Reading Masterclass",
    slug: "tarot-card-reading-masterclass",
    subtitle: "Unlock the secrets of the Rider-Waite Tarot deck from basics to professional readings.",
    description: "A complete walkthrough of the Major and Minor Arcana. Learn the art of intuitive storytelling, card combinations, and how to build a professional business reading Tarot cards.",
    price: 4999,
    featured_image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
    duration: "6 Weeks",
    level: "beginner",
    category: "Occult",
    highlights: ["Master 78 Rider-Waite cards", "Learn intuitive reading without memorizing books", "Step-by-step career spread guides", "Occult business launch tips"],
    curriculum: [
      {
        title: "The Major Arcana & The Fool's Journey",
        description: "Deep dive into the 22 core cards representing life lessons and major milestones."
      },
      {
        title: "The Minor Arcana & Elements",
        description: "Understanding Cups, Wands, Swords, and Pentacles."
      },
      {
        title: "Professional Reading Ethics & Client Care",
        description: "How to frame questions, handle delicate situations, and establish standard rates."
      }
    ],
    what_you_receive: [
      { text: "Exclusive Tarot workbook PDF" },
      { text: "Weekly live practice sessions" },
      { text: "Certificate of Professional Reader" }
    ],
    who_is_this_for: [
      { text: "Aspiring professional tarot readers" },
      { text: "Anyone seeking self-guidance and intuitive tools" }
    ],
    instructor: {
      name: "Sonali Bhattacharya",
      title: "Founder & Mentor",
      bio: "Sonali Bhattacharya has conducted over 1,000 professional tarot readings and certified hundreds of professional readers."
    },
    status: "published",
    featured: true,
    display_order: 2
  }
];

export const blogs = [
  {
    title: "Crystal Healing: Balancing Your Aura and Emotions",
    slug: "crystal-healing-balancing-your-aura-and-emotions",
    excerpt: "Crystals hold powerful vibrations that restore emotional balance and clear auric blockages. Learn how to cleanse and work with these natural healers.",
    content: `
      <p>Crystals have been part of spiritual practices for thousands of years. Ancient civilizations believed crystals held <strong>powerful vibrations</strong> that could heal, protect, and bring good fortune. Today, crystal healing has gained immense popularity because of its ability to restore emotional balance and spiritual alignment.</p>
      <p>Each crystal carries unique energy. For example, <strong>Amethyst</strong> is known for calming the mind and helping with stress relief. <strong>Rose Quartz</strong> enhances love, compassion, and self-acceptance. <strong>Black Tourmaline</strong> is widely used for protection against negativity. By keeping these crystals close to you—or meditating with them—you align your aura with their natural vibrations.</p>
      <p>Crystal healing is not about instant magic. Instead, it is about creating a subtle but powerful shift in your energy field. For instance, if someone struggles with anxiety, holding a calming crystal can help them feel grounded. Similarly, if you face difficulties in relationships, crystals like rose quartz and green aventurine can invite harmony and trust.</p>
      <p>At Adhyatmik Sutraa, we not only provide authentic gemstones but also <strong>teach crystal healing</strong>. Our course explains how to select, cleanse, and use crystals for maximum benefits. We also guide students on combining crystal healing with other practices like reiki and meditation.</p>
      <p>One of the biggest benefits of crystal healing is its simplicity. You do not need complex rituals—just keeping the right crystal near you can make a difference. Over time, these crystals become part of your life, subtly improving your aura, thoughts, and emotions.</p>
      <p>In a world full of stress and distractions, crystal healing helps you stay centered. By learning this practice, you are not only inviting positivity into your life but also gaining the ability to help others cleanse their emotional blockages and live with clarity.</p>
    `,
    featured_image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80",
    category: "Crystals",
    tags: ["Crystals", "Aura", "Healing", "Alternative Healing"],
    author: "Sonali Bhattacharya",
    status: "published",
    featured: true,
    read_time: 4,
    seo_title: "Crystal Healing: Balancing Your Aura & Emotions | Adhyatmik Sutraa",
    seo_description: "Discover the healing vibrations of crystals like Amethyst and Black Tourmaline. Learn how to cleanse your aura and manage emotional balance."
  },
  {
    title: "Angel Healing: Connecting with Divine Energies",
    slug: "angel-healing-connecting-with-divine-energies",
    excerpt: "Channel angelic love and protection to heal emotional blocks and find peace. Learn the basics of working with Archangels Michael and Raphael.",
    content: `
      <p>The world around us is full of energies—some that uplift us and some that drain us. When life feels heavy, angel healing can be the <strong>gentle guiding light</strong> that clears our path. This spiritual practice is based on the belief that angels and higher divine beings are always around us, ready to help when we seek their guidance.</p>
      <p>Angel healing works by calling upon these divine beings to assist in clearing negativity, emotional pain, and inner doubts. Through prayers, affirmations, and meditative practices, a healer channels angelic energy to bring peace and positivity. Many clients have described angel healing sessions as deeply relaxing, with a renewed sense of hope.</p>
      <p>For instance, Archangel Michael is often called upon for protection and strength. Archangel Raphael is known for healing, especially emotional and physical imbalances. Each angel carries unique vibrations, and when we tune into them, we align ourselves with universal harmony.</p>
      <p>At Adhyatmik Sutraa, we teach the <strong>Angel Healing Course</strong> where you learn to connect with these divine energies. Whether you wish to heal yourself or guide others, this practice empowers you to recognize angelic signs, remove energy blockages, and uplift the spirit.</p>
      <p>Angel healing is not bound by religion—it is purely about divine love and compassion. Anyone with an open heart can connect with angels. If practiced with faith, it can help reduce stress, overcome fear, and create a deep bond with universal energy.</p>
      <p>When you embrace angel healing, you realize that you are never alone. The angels are always with you, whispering guidance, protecting your aura, and lighting your path toward positivity.</p>
    `,
    featured_image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
    category: "Angels",
    tags: ["Angels", "Divine Energy", "Healer", "Spiritual Support"],
    author: "Sonali Bhattacharya",
    status: "published",
    featured: true,
    read_time: 3,
    seo_title: "Angel Healing: Connecting With Divine Energies | Adhyatmik Sutraa",
    seo_description: "Connect with divine angels to heal emotional pain and clear negative blocks. Learn about Archangels Michael and Raphael."
  }
];

export const quotes = [
  {
    text: "Healing is not a destination — it is the sacred act of returning to yourself, one breath at a time.",
    author: "Sonali Bhattacharya"
  },
  {
    text: "Every soul is unique, and so is its timeline for healing. Honor your path, step into alignment.",
    author: "Sonali Bhattacharya"
  },
  {
    text: "Stillness is where creativity and solutions to problems are found.",
    author: "Eckhart Tolle"
  },
  {
    text: "When you plant seeds of intention with love, the universe conspires to help them bloom.",
    author: "Sonali Bhattacharya"
  },
  {
    text: "The wound is the place where the light enters you.",
    author: "Rumi"
  },
  {
    text: "Clear the blockages of the mind, and the flow of abundance will guide you home naturally.",
    author: "Sonali Bhattacharya"
  }
];
