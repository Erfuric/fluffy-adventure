const Employee = require('./Employee');
const Department = require('./Department');
const Role = require('./Role');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});

Reader.hasMany(Book, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});

Book.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

module.exports = { Reader, Book, LibraryCard };