class SectSerializer < ActiveModel::Serializer
  attributes :id, :max_size, :name, :type
end
