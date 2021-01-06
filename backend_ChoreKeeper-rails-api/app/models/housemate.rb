class Housemate < ApplicationRecord
    has_many :chores
    validates :id, uniqueness: true
end
