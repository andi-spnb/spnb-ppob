// library/profit-config.js

// Definisikan config dulu sebelum diexport
const marginConfig = {
  games: {
    ff: {
      markup: 0.10,
      minProfit: 1000,
      maxProfit: 10000
    },
    ml: {
      markup: 0.12,
      minProfit: 1000,
      maxProfit: 15000
    }
  },
  pulsa: {
    telkomsel: {
      markup: 0.05,
      minProfit: 500,
      maxProfit: 5000
    },
    indosat: {
      markup: 0.05,
      minProfit: 500,
      maxProfit: 5000
    }
  }
}

const resellerLevels = {
  bronze: {
    minTransaction: 0,
    bonus: 0.02,
    maxProfitMultiplier: 1
  },
  silver: {
    minTransaction: 1000000,
    bonus: 0.05,
    maxProfitMultiplier: 1.5
  },
  gold: {
    minTransaction: 5000000,
    bonus: 0.08,
    maxProfitMultiplier: 2
  }
}

// Fungsi untuk menghitung harga
function calculatePrice(basePrice, category, subcategory, userLevel = 'bronze') {
  try {
    // Get margin config
    const config = marginConfig[category]?.[subcategory]
    if (!config) throw new Error('Invalid category/subcategory')

    // Get reseller bonus
    const reseller = resellerLevels[userLevel]
    if (!reseller) throw new Error('Invalid user level')

    // Calculate markup
    let markup = config.markup + reseller.bonus
    let profit = Math.round(basePrice * markup)

    // Apply min/max constraints 
    profit = Math.max(config.minProfit, profit)
    profit = Math.min(config.maxProfit * reseller.maxProfitMultiplier, profit)

    const finalPrice = basePrice + profit

    return {
      basePrice,
      markup: markup * 100, // Convert to percentage
      profit,
      finalPrice
    }
  } catch (err) {
    console.error('Price calculation error:', err)
    return null
  }
}

// Export setelah semua didefinisikan
module.exports = {
  marginConfig,
  resellerLevels, 
  calculatePrice
}