const listings = [
  {
    id: 201,
    title: 'Red jacket',
    images: [{fileName: 'jacket1'}],
    price: 50000,
    categoryId: 5,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 3,
    title: 'Gray couch in a great condition',
    images: [{fileName: 'couch2'}],
    categoryId: 1,
    price: 1000000,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 1,
    title: 'Room & Board couch (great condition) - delivery included',
    description:
      "I'm selling my furniture at a discount price. Pick up at Venice. DM me asap.",
    images: [{fileName: 'couch1'}, {fileName: 'couch2'}, {fileName: 'couch3'}],
    price: 2000000,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 2,
    title: 'Designer wear shoes',
    images: [{fileName: 'shoes1'}],
    categoryId: 5,
    price: 200000,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 102,
    title: 'Canon 400D (Great Condition)',
    images: [{fileName: 'camera1'}],
    price: 5000000,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 101,
    title: 'Nikon D850 for sale',
    images: [{fileName: 'camera2'}],
    price: 4000000,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 4,
    title: 'Sectional couch - Delivery available',
    description: 'No rips no stains no odors',
    images: [{fileName: 'couch3'}],
    categoryId: 1,
    price: 1500000,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 6,
    title: 'Brown leather shoes',
    images: [{fileName: 'shoes2'}],
    categoryId: 5,
    price: 150000,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
]

const addListing = (listing) => {
  listing.id = listings.length + 1
  listings.push(listing)
}

const getListings = () => listings

const getListing = (id) => listings.find((listing) => listing.id === id)

const filterListings = (predicate) => listings.filter(predicate)

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
}
