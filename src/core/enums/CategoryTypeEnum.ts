/* eslint-disable no-unused-vars */
enum CategoryTypeEnum {
  NATURAL_SCIENCES = 'Natural Sciences',
  SOCIAL_SCIENCES = 'Social Sciences',
  ENGINEERING = 'Engineering',
  COMPUTER_SCIENCE = 'Computer Science',
  EXACT_SCIENCES = 'Exact Sciences',
  ARTS = 'Arts',
  OTHER = 'Other',
}

const categoryOptions = Object.keys(CategoryTypeEnum).map((key) => ({
  value: key,
  label: CategoryTypeEnum[key as keyof typeof CategoryTypeEnum],
}))

export default categoryOptions
